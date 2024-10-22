import ErrorContent from "../components/ErrorContent";

interface ErrorPageProps {
  status: number;
  message: string;
}

const ErrorPage = () => {
  return (
    <ErrorContent
      status={404}
      message={"The page you’re looking for was not found."}
    />
  );
};

export default ErrorPage;