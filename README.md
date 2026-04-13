## Activity 1 – Read the Products Module

**No coding required. Just read and understand.**

Open each file in this order and read the comments carefully:

1. What happens if you send a POST to `/products` with `price: -5`? Why?

Rta: No se ejecuta el llamado al endpoint. Esto sucede porque, de acuerdo con las reglas de negocio establecidas dentro del DTO de productos, este valor no puede ser negativo, específicamente por el decorador @IsPositive().

El mensaje que regresa es un 400 Bad Request:

JSON
{
    "message": [
        "price must be a positive number"
    ],
    "error": "Bad Request",
    "statusCode": 400
}



2. What is the role of `ParseIntPipe` in `@Param('id', ParseIntPipe)`?

Rta: El rol de ParseIntPipe es transformar el valor del parámetro de entrada proveniente de la URL que originalmente llega como un string a un tipo number. Además, funciona como validador, ya que si el valor recibido no puede ser convertido a un número entero, el pipe lanza automáticamente una excepción de tipo 400 Bad Request.

3. What would happen without `@IsNotEmpty()` on `name`?

Rta: Si eliminamos el decorador @IsNotEmpty(), el campo name seguiría estando protegido contra entradas vacías debido a que hay @MinLength(3). Dado que esta regla exige un mínimo de tres caracteres, cualquier intento de enviar un string vacío fallaría automáticamente al no cumplir con la longitud mínima requerida. En este caso, @MinLength(3) actúa como una doble validación que garantiza que el campo siempre reciba contenido válido.

4. Why does the service throw `NotFoundException` instead of returning `null`?

Rta: El servicio lanza NotFoundException para mantener la coherencia con el protocolo HTTP, asegurando que el cliente reciba un código de estado 404 Not Found en lugar de un 200 OK con un valor nulo. Esta práctica facilita el manejo de errores, ya que detiene la ejecución inmediatamente y permite que el framework gestione la respuesta de forma estandarizada. Así, se evita añadir validaciones manuales adicionales en el controlador y se mejora la claridad de la API para quien la consume.

5. What is the difference between `@Get()` and `@Get(':id')`?

Rta: Básicamente, aunque ambas utilicen el mismo método HTTP, su finalidad es distinta dentro de la API. Mientras que  @Get() se utiliza para obtener la lista completa de elementos, @Get(':id') emplea un parámetro de ruta para filtrar y obtener un elemento específico dado el parametro recibido. De esta manera, el servidor puede diferenciar entre una consulta general a una especifica.

## Activity 2 – Question on tasks.md


These questions require you to reason about the code, not just recall definitions. Open the files as you work through them.

---

**Q1 — Dead route diagnosis**

Look at [tasks.controller.ts:27](src/tasks/tasks.controller.ts#L27). Right now, `findAll()` has no route decorator. If you start the server and call `GET /tasks`, what response do you get — a 404, a 500, or something else? Explain *why* NestJS behaves that way, and describe exactly what you need to add to fix it.

Rta:Si ejecutas GET /tasks, la respuesta será un 404 Not Found. Esto ocurre porque en NestJS las rutas solo existen si están decoradas explícitamente con anotaciones como @Get(), @Post(), etc. Aunque el método findAll() esté definido en el controller, al no tener un decorador de ruta, NestJS no lo registra como endpoint accesible. Por lo tanto, cuando llega la petición, el framework no encuentra ninguna coincidencia y responde con 404. Para solucionarlo, basta con añadir @Get() encima del método findAll() para que quede correctamente expuesto como ruta HTTP.

---

**Q2 — When `transform: true` is not enough**

[main.ts:15](src/main.ts#L15) sets `transform: true` on the global `ValidationPipe`, which auto-converts types. Yet [products.controller.ts:32](src/products/products.controller.ts#L32) still uses `ParseIntPipe` explicitly on `@Param('id')`. If `transform: true` already handles type conversion, why is `ParseIntPipe` still there? Are they doing the same job, or is there a difference in *when* or *how* they convert and reject?

Rta: Aunque transform: true en el ValidationPipe permite convertir tipos automáticamente usando class-transformer, no cumple exactamente la misma función que ParseIntPipe. La conversión automática es más general y puede no fallar de manera estricta si el valor no es válido, mientras que ParseIntPipe convierte el valor y además valida explícitamente que sea un número entero, lanzando un error 400 Bad Request si no lo es. Es decir, ambos convierten, pero ParseIntPipe también garantiza una validación estricta en el momento de procesar el parámetro, por lo que es más seguro para inputs como IDs.

---

**Q3 — Silent strip vs hard rejection**

[main.ts:13-14](src/main.ts#L13-L14) enables both `whitelist: true` and `forbidNonWhitelisted: true`. Imagine you remove `forbidNonWhitelisted: true` and keep only `whitelist: true`. Now send this request:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Maria", "email": "m@m.com", "age": 20, "password": "secret"}'
```

What is the exact response status and body? What happens to `"password"` in the service? Why could this behavior be a security problem in a real app?

Rta: Si se elimina forbidNonWhitelisted: true y se deja solo whitelist: true, la petición se procesa correctamente y devuelve un estado exitoso 201. Sin embargo, el campo "password" no aparece en la respuesta ni llega al servicio, ya que es eliminado silenciosamente por el pipe de validación. Esto puede ser problemático en una aplicación real porque el cliente cree que envió un dato válido, pero el servidor lo ignora sin notificarlo. Esto puede ocultar errores, inconsistencias o incluso intentos maliciosos. En cambio, con forbidNonWhitelisted: true, el servidor rechaza la petición con un 400, haciendo el problema explícito.

---

**Q4 — Mutation side-effect**

Read [products.service.ts:44-48](src/products/products.service.ts#L44-L48). The `update` method calls `Object.assign(product, dto)`, which mutates the object in the array directly. Now read [products.service.ts:21-23](src/products/products.service.ts#L21-L23) — `findAll()` returns `this.products` directly.

If a caller modifies the object returned by `findAll()`, does that change the data stored in the service? Trace through the code and explain why. What would you change to prevent this?

Rta: Sí, modificar el objeto retornado por findAll() afecta directamente los datos almacenados en el servicio. Esto se debe a que findAll() retorna una referencia directa al arreglo this.products, no una copia. Luego, el método update() utiliza Object.assign(product, dto), lo que muta el objeto original en memoria. Como resultado, cualquier modificación externa al objeto retornado impacta el estado interno del servicio. Para evitar este problema, se debería retornar una copia de los datos.

---

**Q5 — The optional field trap**

In [update-product.dto.ts:12-14](src/products/dto/update-product.dto.ts#L12-L14), `price` has both `@IsNumber()`, `@IsPositive()`, and `@IsOptional()`. Send this PATCH request:

```bash
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price": -50}'
```

Does validation pass or fail? Now send this:

```bash
curl -X PATCH http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{}'
```

Does validation pass or fail? Explain the exact rule `@IsOptional()` enforces — what does "optional" actually mean to `class-validator`?

Rta: Cuando se envía { "price": -50 }, la validación falla porque, aunque el campo es opcional (@IsOptional()), al estar presente se aplican las demás validaciones (@IsNumber() y @IsPositive()), y el valor no cumple con ser positivo. En cambio, si se envía {}, la validación pasa correctamente porque price no está presente y @IsOptional() indica que el campo solo debe validarse si existe. Es importante entender que “opcional” no significa que cualquier valor sea válido, sino que las validaciones se omiten únicamente cuando el campo no está definido.

---

**Q6 — ID reuse after deletion**

Look at how `nextId` works in [tasks.service.ts:18-19](src/tasks/tasks.service.ts#L18-L19) alongside `remove` at [tasks.service.ts:50-53](src/tasks/tasks.service.ts#L50-L53). If you delete task `#1`, then create a new task, what ID does the new task get? Could `findOne(1)` ever return the wrong task? Now consider: what if the implementation used `this.tasks.length + 1` as the ID instead of `nextId` — walk through a create/delete/create sequence and show why that would break.

Rta: Con el uso de nextId, los IDs nunca se reutilizan. Si se crea una tarea con ID 1, luego se elimina y se crea otra, esta nueva tendrá ID 2. Esto garantiza unicidad y evita conflictos. En este esquema, findOne(1) no devolverá un objeto incorrecto porque ese ID ya no existe. Sin embargo, si en lugar de nextId se usara this.tasks.length + 1, se generarían errores. Por ejemplo, al eliminar una tarea, el tamaño del arreglo disminuye y el siguiente ID podría repetirse, generando duplicados. Esto rompe la integridad de los datos y puede causar comportamientos incorrectos al buscar o actualizar elementos.

---

**Q7 — Module forgotten**

You finish building all five files in the Users module but forget to add `UsersModule` to the `imports` array in [app.module.ts](src/app.module.ts). What happens when you:

a) Start the server — does it crash or start normally?  
b) Send `POST /users` — what is the response status and why?

Now explain: is this a *compile-time* error, a *startup* error, or a *runtime* error in NestJS terms?

Rta: Si olvidas agregar UsersModule en el arreglo imports de app.module.ts, el servidor iniciará normalmente porque NestJS no valida la presencia de todos los módulos en tiempo de arranque. Sin embargo, cuando intentes hacer una petición como POST /users, obtendrás un 404 Not Found, ya que el controller correspondiente nunca fue registrado. Este es un error de tipo runtime, porque no se detecta ni en compilación ni al iniciar el servidor, sino únicamente cuando se intenta acceder a la ruta.

---

**Q8 — Missing 201**

The stub in [tasks.controller.ts:37-39](src/tasks/tasks.controller.ts#L37-L39) will eventually have a `@Post()` decorator, but there is no `@HttpCode(HttpStatus.CREATED)`. What HTTP status code does a `@Post()` handler return by default in NestJS? Is the absence of `@HttpCode(201)` functionally wrong — could a client break because of it? When does it actually matter?

Rta: En NestJS, los métodos decorados con @Post() devuelven por defecto el código de estado 201 Created, aun asi no se especifica @HttpCode(201). Por tanto, no incluir este decorador no esta mal desde si lo vemos que es funcional. Sin embargo, puede ser importante, por ejmeplo, donde se desea mayor claridad o control sobre los códigos de respuesta, como en APIs documentadas, integraciones con frontend o pruebas automatizadas. En esos casos, especificar explícitamente el código puede evitar confusiones o errores.

---

**Q9 — Service throws, not returns null**

In [products.service.ts:25-30](src/products/products.service.ts#L25-L30), `findOne` throws `NotFoundException` instead of returning `null`. Rewrite the method signature and the controller's `findOne` method as they would look if the service returned `null` instead. Then explain: which version is better for a growing codebase where `findOne` is called from multiple places (e.g., inside `update` and `remove` as well), and why?

Rta: Si el servicio retornara null en lugar de lanzar una excepción, el método findOne tendría una firma como findOne(id: number): Product | null, y el controller debería verificar el resultado y lanzar manualmente una excepción si es null. Sin embargo, lanzar directamente una NotFoundException desde el servicio es una mejor práctica en aplicaciones grandes, ya que centraliza el manejo de errores y evita duplicar lógica en múltiples lugares. Además, garantiza que cualquier persona qeu lo use  reciba un comportamiento adecuado sin necesidad de validaciones adicionales.

---
