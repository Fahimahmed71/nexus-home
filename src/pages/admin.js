import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";

const admin = () => {
  return (
    <section>
      <h1 className=" text-5xl font-medium text-center text-neutral/30 capitalize">
        Welcome admin
      </h1>

      <dl className="drawer drawer-mobile">
        <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <dt className="flex justify-center mt-3">
            <label htmlFor="admin-drawer" className="drawer-button lg:hidden ">
              <div className="flex items-center gap-1 cursor-pointer">
                <h1 className="text-accent">Sidebar</h1>
                <CgMenuGridR className="text-3xl text-accent" />
              </div>
            </label>
          </dt>
          <dt>
            <h1>a</h1>
          </dt>
        </div>
        <div className="drawer-side">
          <label htmlFor="admin-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link href="/admin/properties">Sidebar Item 1</Link>
            </li>
            <li>
              <Link href="/admin/agents">Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </dl>
    </section>
  );
};

export default admin;
