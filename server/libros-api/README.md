En powershell:

``` bash
docker compose up
```

En otro powershell:
``` bash
docker compose exec laravel.test php artisan migrate:fresh --seed
```


Abrimos http://localhost/books