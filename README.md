<p align="center">
   <img src="https://user-images.githubusercontent.com/71537090/167278902-b564cc78-d48d-44e6-b4ff-120e00406ddb.png" alt="Logo Next Level Week Return" width="250px"/>
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/yuriqpaiva/feedget?color=blueviolet">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/yuriqpaiva/feedget?color=blueviolet">

  <img alt="GitHub" src="https://img.shields.io/github/license/yuriqpaiva/feedget?color=blueviolet">
</p>

![image](https://user-images.githubusercontent.com/71537090/167278997-56d6c6a9-e477-4910-b512-23feb2fff54f.png)

<br>

## 💡 Introduction

Monorepo of Full-stack application Feedback Widget assistant.
This project aim to help developers or application's maintainers to get feedback from their users by:

1. Allowing users to leave feedback about Problems, Ideas and Others
2. Getting a user comment about what it's going on
3. Getting a screenshot of application's screen if necessary
4. Submitting user's feedback to application's support via email

<br>

## 🧪 Technologies

Technologies that were used on this application:

- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com/pt-br)
- [Prisma](https://www.prisma.io)
- [Jest](https://jestjs.io)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

<br>

## 🖥 Pre-requisites:

- NodeJS
- Expo
- Yarn
- Database compatible with [Prisma](https://www.prisma.io)

<br/>

## 🚀 How to Run it?

From project's root file:

### Web application:

```sh
$ cd web
$ yarn install
$ yarn dev
```

### Mobile:

```sh
$ cd mobile
$ yarn install
$ yarn start
```

### Backend

```sh
$ cd server
$ yarn install

# Run migrations
$ npx prisma migrate dev
$ yarn dev

# Run prisma studio on another console
$ npx prisma studio
```

<br/>

## ⚙️ Environment Variables

Here are some examples of how you can set up your `.env` files

### On Web application:

```js
VITE_API_URL='http://localhost:3333'
```

### On Backend:

```js
DATABASE_URL='postgresql://<username>:<password>@<hostname>:<port>/<database>'
```

<br>

## 🔖 Layout

Check Figma Layout of this project [here](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)

<br>

## 📝 License

MIT License © Yuri Paiva. Check [LICENSE](LICENSE.md) for more details

---

<br>

Made with 💜 &nbsp;by Yuri Paiva
