import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
function ErrorPage() {
  const error = useRouteError();

  let title = "에러가 발생하였습니다";
  let message = "무언가 잘못되었음";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "페이지를 찾을 수 없어";
    message = "요청한 페이지가 없네요";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
