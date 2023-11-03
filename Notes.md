## Initialize Go app
go mod init github.com/locdang1999/Go-React-Todo-Application

## Install Fiber v2
go get -u github.com/gofiber/fiber/v2

## Create client add with Vite
yarn create vite client -- --template react-ts

## Install dependencies
yarn add @mantine/hooks @mantine/core swr @primer/octicons-react

## start
go run main.go with BE
yarn dev or npm run dev with FE

## VScode shows an error when having multiple Go Projects in a directory
https://stackoverflow.com/questions/65748509/vscode-shows-an-error-when-having-multiple-go-projects-in-a-directory

with code:
cd /to-folder-parent
go work init
go work use project-one
go work use project-two