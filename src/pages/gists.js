import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { getGists, searchGists } from "../store/gists";

const searchGistsDebounced = debounce((query, dispatch) => {
  dispatch(searchGists(query));
}, 1000);

const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

export function GistsPage() {
  const [value, setValue] = useState("bogdanq");
  const { gists, pending, error, gistsSearch, errorSearch, pendingSearch } =
    useSelector((state) => state.gists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    searchGistsDebounced(value, dispatch);
  }, [dispatch, value]);

  if (pending || pendingSearch) {
    return <h1>pending...</h1>;
  }

  if (error || errorSearch) {
    return <h1>ERROR</h1>;
  }

  return (
    <div>
      <h1>GistsPage</h1>

      {gists.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}

      {buttons.map((button) => (
        <button onClick={() => dispatch(getGists(button))} key={button}>
          {button}
        </button>
      ))}

      <hr />

      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        {gistsSearch.map((gist) => (
          <h2 key={gist.url}>{gist.url}</h2>
        ))}
      </div>
    </div>
  );
}
