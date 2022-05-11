import Anvil from "../Anvil";
import Layout from "../Layout";

export default function Index(props) {
  return (
    <Layout otherLang={props.otherLang} otherPage={props.otherPage}>
      <div className="w-1/2 pl-28 flex flex-col justify-center lg:w-full lg:h-1/2 lg:pl-0">
        <h1 className="dark:text-white text-black text-6xl font-bold leading-normal lg:leading-tight lg:text-center md:text-3xl md:mt-5">
          {props.h1}
          <br />
          <span className="dark:text-modra text-zelena">
            {props.h1_colored}
            <br />
            {props.h1_3rd_line}
          </span>
        </h1>
        <button className="text-white bg-zelena dark:bg-modra text-base w-fit p-4 rounded-md mt-16 lg:m-auto lg:text-sm lg:mt-5">
          {props.button}
        </button>
      </div>
      <Anvil className="h-full w-1/2 lg:w-full lg:h-1/2" />
    </Layout>
  );
}
