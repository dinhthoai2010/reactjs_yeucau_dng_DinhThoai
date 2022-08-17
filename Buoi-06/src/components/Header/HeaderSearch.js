import { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../shared/Input"


function HeaderSearch() {

  const [search, setSearch] = useState('');
  function handleChangeInput(e) {
    setSearch(e.target.value)
  }
  let history = useHistory();

  function handleSubmitForm(e) {
    e.preventDefault();
    history.push("/search?p="+encodeURIComponent(search));
  }

  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmitForm} method="get">
        <div className="header-search">
          <Input cls="header-search" onChange={handleChangeInput} type="search" className="header-search__input" placeholder="Search articles here ..." name="query" aria-label="Search" />
        </div>
      </form>
    </div>
  )
}

export default HeaderSearch