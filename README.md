@@ -1,70 +1,74 @@
# Getting Started with Create React App
# Проекты для начинающих на ReactJS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Все проекты разработаны для бесплатного курса на канале [Archakov Blog](https://www.youtube.com/c/ArchakovBlog)

## Available Scripts
Каждый проект хранится в отдельной ветке.

In the project directory, you can run:
## Счётчик
![1660249082356](https://user-images.githubusercontent.com/12086860/184235207-2d20299a-0b9a-40e6-acf7-be582f6ecbfe.png)

### `npm start`
**🌿 Ветка**: `counter`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
**👀 Что изучим?**
1. Что такое состояние (state)
2. Хук useState
3. Как при клике на кнопку вызывать функцию

The page will reload when you make changes.\
You may also see any lint errors in the console.
## Модальное окно
![1660249510674](https://user-images.githubusercontent.com/12086860/184235807-bfb5d74b-68dc-4903-8b15-e18f6427fcc2.png)

### `npm test`
**🌿 Ветка**: `modal`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
**👀 Что изучим?**
1. Условный рендер
2. Как делать анимированное модальное окно
3. Как передавать в модально окно контент (children)
4. Как передавать пропсы

### `npm run build`
## Quiz (опросник)
![1660249609940](https://user-images.githubusercontent.com/12086860/184236063-9f807f93-f6a4-4577-9a12-443ff1d3fd43.png)

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
**🌿 Ветка**: `quiz`

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
**👀 Что изучим?**
1. Поэтапный рендер контента
2. Прогрессбар
3. Передача пропсов для рендера результата опроса

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
## Список гостей (пользователей)
![1660249789449](https://user-images.githubusercontent.com/12086860/184236601-2c8d94bf-105c-4b48-982c-65a6ed4f8c51.png)

### `npm run eject`
**🌿 Ветка**: `users`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
**👀 Что изучим?**
1. Работа с хуком useEffect
2. Отправка запроса на бэкенд с помощью fetch и рендер этих данных
3. Скелетон с помощью библиотеки `react-content-loader`
4. Поиск пользователей
5. Рендер списка пользователей
6. Spread-оператор
7. Добавление/удаление пользователей из массива приглашений
8. Отображение информации о загрузке контента

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
## Конвертер валют
![1660250017350](https://user-images.githubusercontent.com/12086860/184237245-dd26fc7e-1b84-4490-b9cf-3d40a4ded550.png)

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
**🌿 Ветка**: currency-converter

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
**👀 Что изучим?**
1. Работа с хуком useEffect
2. Получение списка курса валют из отдельного API 
3. Конвертация одной валюты в другую и наоборот (без бэкенда)

## Learn More
## Коллекция фотографий
![1660250202173](https://user-images.githubusercontent.com/12086860/184237707-4810b1d8-f20b-40cf-93ea-37d2051b87ba.png)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
**🌿 Ветка**: `photos`

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
**👀 Что изучим?**
1. Фильтрация коллекций с помощью категорий
2. Поиск коллекций
3. Пагинация
4. Получение, пагинация через бэкенд
5. Отображение информации о загрузке контента