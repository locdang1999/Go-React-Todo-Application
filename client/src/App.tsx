/* eslint-disable @typescript-eslint/no-unused-vars */

import { MantineProvider, Box, List, createTheme, ThemeIcon } from '@mantine/core'
import useSWR from 'swr';
import AddTodo from './components/AddTodo';
import '@mantine/core/styles.css';
import { CheckCircleFillIcon } from '@primer/octicons-react';

export const ENDPOINT = 'http://localhost:4000';

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}
const theme = createTheme({
  /** Your theme override here */

});

const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data, mutate } = useSWR<Todo[]>('api/todos', fetcher);

  const markTodoAdDone = async (id: number) => {
    const updated = await fetch(`${ENDPOINT}/api/todos/${id}/done`, {
      method: "PATCH"
    }).then((r) => r.json());

    mutate(updated);
  }

  return (
    <MantineProvider theme={theme}>
      <Box style={(_theme) => ({
        padding: '2em',
        with: '100%',
        maxWidth: '40rem',
        margin: "0 auto"
      })}>
        <List spacing="xs" size='sm' mb={12} center>
          {data?.map((itm, idx) => {
            return <List.Item key={`todo_list_${idx}`} icon={itm.done ?
              (<ThemeIcon color='teal' size="24" radius="xl">
                <CheckCircleFillIcon size={20} />
              </ThemeIcon>) :
              (<ThemeIcon color='gray' size="24" radius="xl">
                <CheckCircleFillIcon size={20} />
              </ThemeIcon>)}
              onClick={() => markTodoAdDone(itm.id)}
            >
              {itm.title}
            </List.Item>
          })}
        </List>
        <AddTodo mutate={mutate} />
      </Box>
    </MantineProvider>
  )
}

export default App
