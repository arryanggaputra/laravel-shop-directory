<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>
<body>
    @inertia
</body>
</html>

