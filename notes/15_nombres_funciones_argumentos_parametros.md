# Nombres funciones, argumentos y parametros

Los nombres de las funciones deben ser exactamente lo que hace la funcion.

## parametros

Se llaman parametros a las variables que se definen en la firma de una funcion

ejemplo: `function sendEmail(toWhom: string): boolean {}`, toWhom es el parametro

- Se recomienda usar maximo 3 parametros en las funciones
- En caso de necesitar mas de 3 parametros, es mejor definir un objeto y que sus atributos sean los parametros y se recomienda
que sus atributos se orden de manera alfabetica

ejemplo: `function sendEmail({ toWhom, from, body, subject, apikey }: SendEmailOptions): boolean {}`, SendEmailOptions seria interface en TS

## argumentos

Se llaman argumentos a las variables o valores que se envian cuando se invoca la funcion

ejemplo: `sendEmail(toWhom);`, toWhom es el argumento
