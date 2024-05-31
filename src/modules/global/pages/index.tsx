import React from "react";
import "./style.scss";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Tags from "../components/Tags";
import Breadcrumbs from "../components/Breadcrumbs";
export default function Global() {
  const location = useLocation();
  const navigate = useNavigate();
  const [{ ins }, _global] = useGlobalStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // 保存上次路由地址
    if (location.pathname !== "/404" && location.pathname !== "/") {
      sessionStorage.setItem("PATH", location.pathname);
    }

    if (location.pathname === "/login") {
      _global.ins.clear();
    } else {
      const TOKEN = localStorage.getItem("TOKEN");
      if (TOKEN) {
        if (!ins.size) {
          NProgress.start();
          const MODE = localStorage.getItem("MODE");
          if (MODE) {
            _global.mode = MODE as "staticMatch" | "dynamicLoad";
          }

          let FN;
          if (_global.mode === "staticMatch") {
            FN = staticMatch;
          } else {
            FN = dynamicLoad;
          }
          setLoading(true);
          FN().then((resp) => {
            _global.ins = resp.ins;
            _global.menu = resp.menu;
            const path = sessionStorage.getItem("PATH") || "";
            navigate(path === "/login" ? "/" : path, {
              replace: true,
            });
            setTimeout(() => {
              setLoading(false);
              NProgress.done();
            }, 500);
          });
        }
      } else {
        message.error({
          content: "登录状态失效, 即将退出登录!",
        });
        setTimeout(() => {
          window.location.href = window.location.origin + "/#/login";
        }, 1000);
      }
    }
  }, [location.pathname]);

  const [single, setSingle] = useState(false);
  useEffect(() => {
    if (location.pathname === "/login") {
      if (!single) setSingle(true);
    } else {
      if (single) setSingle(false);
    }
  }, [location.pathname]);

  return (
    <div className={["global-wrap", single ? "single" : "container"].join(" ")}>
      {loading ? (
        <Spin
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : single ? (
        <Outlet></Outlet>
      ) : (
        <>
          {/* 内容布局 */}
          {/* 头部 */}
          <Header />
          <div className="content-wrap">
            {/* 侧边栏 */}
            <Aside />
            <div className="main">
              {/* 页签  */}
              <Tags />
              <div className="module-wrap">
                {/* 面包屑导航 */}
                <Breadcrumbs />
                <Outlet />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
