import React, { Suspense } from "react";

const News = React.lazy(() => import("news/News"));
const Ads = React.lazy(() => import("ads/Ads"));
const Sponsors = React.lazy(() => import("sponsors/Sponsors"));

const App: React.FC = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <News />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Sponsors />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Ads />
      </Suspense>
    </div>
  );
};

export default App;