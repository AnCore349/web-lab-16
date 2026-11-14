# Каталог меню с фильтрацией

Учебное React-приложение: карточки меню загружаются из `src/data.js`, а список
кнопок фильтра формируется автоматически по уникальным категориям в данных.
Кнопка «all» показывает все карточки.

## Запуск

```powershell
npm install
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 0)
$listener.Start()
$env:PORT = $listener.LocalEndpoint.Port
$listener.Stop()
$env:HOST = '127.0.0.1'
npm start
```

Сервер откроется на свободном случайном порту; адрес с портом будет показан в
терминале. Если он занят другим процессом до запуска, повторите выбор порта.

## Проверки и сборка

```powershell
npm test -- --watchAll=false
npm run build
```
