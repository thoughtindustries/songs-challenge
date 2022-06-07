import 'bootstrap/dist/css/bootstrap.css';

import { useRouter } from 'next/router';

import Songs from '../../components/songs';
import Header from '../../components/header';
import searchString from '../../components/util';


export async function getServerSideProps({ params }) {
  let [pageOrInitialSearch, page] = params.q || [];

  if (page) {
    page = parseInt(page, 10);
  } else if (parseInt(pageOrInitialSearch, 10) > 0) {
    page = parseInt(pageOrInitialSearch, 10);
    pageOrInitialSearch = null;
  }

  return {
    props: {
      initialSearch: pageOrInitialSearch || null,
      page: page || 1
    }
  };
}

export default function App({ initialSearch, page }) {
  const router = useRouter();

  const performSearch = newSearch => {
    //Inorder to fix the bug implemented a util which checks for ' and replaces it with ASCII encode
    const str = searchString(newSearch);
    router.replace({ pathname: `/${str}` });
  };

  return (
    <main>
      <Header performSearch={performSearch} initialSearch={initialSearch} />

      <div className="py-5 bg-light">
        <div className="container">
          <Songs search={initialSearch} page={page} />
        </div>
      </div>
    </main>
  );
}
