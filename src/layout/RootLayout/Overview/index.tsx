import React from "react";
import { Box, Container, Divider } from "@mui/material";
import { useTranslation } from "i18n";
import { TopBar } from "./components/TopBar";
export default function Overview({ children }: any) {
  const [t] = useTranslation();
  return (
    <Container
      maxWidth={false}
      className="w-full h-full overflow-hidden overflow-y-scroll flex flex-col min-w-[900px] p-0"
    >
      <TopBar />
      <Box className="h-[30vh] min-w-[900px] flex-shrink-0 flex flex-col justify-center items-center">
        <div className="w-28 h-28 bg-[url('layout/RootLayout/Overview/images/logo.png')] bg-cover"></div>
        <h2 className="mb-3 text-xl">React.Material</h2>
        <div className="text-lg">{t("introduction")}</div>
      </Box>
      <Divider />
      <Box className="w-[900px] h-[40vh] mx-auto my-3 flex-shrink-0 ">
        {children}
      </Box>
    </Container>
  );
}
