package routes

import (
	"github.com/ericmdantas/nimbugs/server/api/todo/routes"
	"github.com/ericmdantas/nimbugs/server/common/static"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func Init(e *echo.Echo) {
	e.Pre(middleware.RemoveTrailingSlash())

	static.Init(e)
	todoroutes.Init(e)
}
