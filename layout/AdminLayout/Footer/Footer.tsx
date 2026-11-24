import Link from "next/link";
export default () => {
  return (
    <footer className="footer flex-column flex-md-row border-top d-flex align-items-center justify-content-between px-4 py-2">
      <div>
        <span>تمامی حقوق برای املاک امید محفوظ است</span> ©
        <Link href="/">
          <a className="text-decoration-none text-warning">
            <span>{new Date().getFullYear()}</span>
          </a>
        </Link>
      </div>
    
    </footer>
  );
};
