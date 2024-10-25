# front-webpack

Готовая сборка для верстки и прочего.

[Документация](docs/readme.md)

## В сборку включено

- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)

## Системные требования

- nodejs 20+

## Установка

```shell
npm ci
```

## Локальная разработка

```shell
npm run dev
```

Страницы создаются в корне и открываются по адресу вида http://localhost:5173/styleguide.html

## Сборка для прода

```shell
npm run buid
```

После сборки результат кладется в папку dist

Для интеграции правильно использовать manifest файл и по исходным названиям получать пути к скомпилированным js и css файлам.
Подробнее описано здесь: https://vitejs.ru/guide/backend-integration.html
