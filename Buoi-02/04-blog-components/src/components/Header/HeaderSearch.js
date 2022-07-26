import Input from "../shared/Input";

function HeaderSearch() {
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form action="/search.html" method="get">
        <div className="header-search">
          <Input  cls="header-search" type="text" className="header-search__input" icon="ion-android-search" placeholder="Search articles here ..." name="query" aria-label="Search"/>
        </div>  
      </form>
    </div>
  );
}

export default HeaderSearch;