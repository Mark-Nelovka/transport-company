import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/Loader";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { Blog, DetailsBlog } from "./components/AboutUs";

const AboutUsPage = lazy(
  () => import("./pages/AboutUs" /* webpackChunkName: "AboutUsPage" */)
);

const ShippersPage = lazy(
  () => import("./pages/Shippers" /* webpackChunkName: "ShippersPage" */)
);

const FlatbedPage = lazy(
  () => import("./pages/Flatbed" /* webpackChunkName: "FlatbedPage" */)
);

const FinancePage = lazy(
  () => import("./pages/Finance" /* webpackChunkName: "FinancePage" */)
);

const NewsPage = lazy(
  () => import("./pages/News" /* webpackChunkName: "NewsPage" */)
);

const CareersPage = lazy(
  () => import("./pages/Careers" /* webpackChunkName: "CareersPage" */)
);

const ContactsPage = lazy(
  () => import("./pages/Contacts" /* webpackChunkName: "ContactsPage" */)
);

const PolicyPage = lazy(
  () => import("./pages/Policy" /* webpackChunkName: "PolicyPage" */)
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Routes>
            <Route path="/transport-company" element={<HomePage />} />
            <Route path="/transport-company/about" element={<AboutUsPage />} />
            <Route path="/transport-company/about/blog" element={<Blog />} />
            <Route
              path="/transport-company/about/blog/:name"
              element={<DetailsBlog />}
            />
            <Route
              path="/transport-company/shippers"
              element={<ShippersPage />}
            />
            <Route
              path="/transport-company/services"
              element={<FlatbedPage />}
            />
            <Route
              path="/transport-company/services/:serviceName"
              element={<FlatbedPage />}
            />
            <Route
              path="/transport-company/lease&finance"
              element={<FinancePage />}
            />
            <Route path="/transport-company/news" element={<NewsPage />} />
            <Route
              path="/transport-company/careers"
              element={<CareersPage />}
            />
            <Route
              path="/transport-company/contacts"
              element={<ContactsPage />}
            />
            <Route path="/transport-company/policy" element={<PolicyPage />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
