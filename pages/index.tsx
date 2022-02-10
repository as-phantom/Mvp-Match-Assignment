import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h3 className="text-mvp-blue-200 text-3xl">Hello from Tailwind</h3>

      <button type="button" className="btn btn-0">
        All projects
      </button>

      <button type="button" className="btn btn-1">
        Generate report
      </button>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit, illum iure sit a laudantium accusamus delectus ut
        quidem dicta. Doloribus distinctio consequuntur, praesentium repellat voluptate laboriosam! Ullam, consequatur. Est.
      </p>
    </div>
  );
};

export default Home;
