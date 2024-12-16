import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const manejoErroresInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      let userMessage = 'Ocurrió un error. Por favor, inténtelo nuevamente.';

      if (error.error instanceof ErrorEvent) {
        console.error('Error del cliente:', error.error.message);
        errorMessage = `Error del cliente: ${error.error.message}`;
      } else {
        console.error('Error del servidor:', error);
        switch (error.status) {
          case 0:
            userMessage =
              'No se pudo conectar con el servidor. Verifique su conexión a Internet.';
            break;
          case 400:
            userMessage =
              'Solicitud inválida. Por favor, revise los datos enviados.';
            break;
          case 401:
            userMessage = 'No autorizado. Por favor, inicie sesión nuevamente.';
            break;
          case 403:
            userMessage = 'No tiene permiso para realizar esta acción.';
            break;
          case 404:
            userMessage = 'El recurso solicitado no fue encontrado.';
            break;
          case 500:
            userMessage = 'Ocurrió un error interno en el servidor.';
            break;
          default:
            userMessage = `Error inesperado (${error.status}). Por favor, intente más tarde.`;
            break;
        }

        errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
      }

      console.error('Error capturado por el interceptor:', errorMessage);

      return throwError(() => ({
        errorMessage,
        userMessage,
        status: error.status,
      }));
    })
  );
};
