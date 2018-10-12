using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Threading.Tasks;

using PromizzApp.Config.Helpers;

namespace PromizzApp.API.Helpers
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var msg = exception.Message;
            var code = (int)HttpStatusCode.InternalServerError;

            if (exception is InvalidModelStateException)
            {
                code = 409;
                msg = exception.Message.Replace("model.", "");
            }

            if (exception is UnauthorizedAccessException)
            {
                code = 500;
                msg = "UNAUTHORIZED";
            }

            if (exception is PromizzGeneralException)
            {
                code = 409;
                msg = (exception as PromizzGeneralException).Message;
            }

            if (exception is PromizzObjectNotFoundException)
            {
                code = 411;
                msg = (exception as PromizzObjectNotFoundException).Message;
            }

            if (exception is PromizzObjectNullException)
            {
                code = 409;
                msg = (exception as PromizzObjectNullException).Message;
            }

            if (exception is PromizzOutOfRangeException)
            {
                code = 409;
                msg = (exception as PromizzOutOfRangeException).Message;
            }

            if (exception is ApplicationException)
            {
                code = 409;
                msg = (exception as ApplicationException).Message;
            }

            if (exception is NotImplementedException)
            {
                code = 410;
                msg = (exception as NotImplementedException).Message;
            }

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = code;

            return context.Response.WriteAsync(new ErrorDetails
            {
                StatusCode = code,
                Message = msg
            }.ToString());
        }
    }
}
