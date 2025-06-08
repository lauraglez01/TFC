En powershell:

``` bash
docker compose up
```



(Esto es solo si quiero eliminar todas las tablas y migrarlas de nuevo, como un reset de todo)
En otro powershell:

```bash
docker compose exec laravel.test php artisan migrate
```
``` bash
docker compose exec laravel.test php artisan migrate:fresh --seed
```

Para ejecutar los tests, hacer:
``` bash
docker compose exec laravel.test php artisan test
```



Abrimos http://localhost/books