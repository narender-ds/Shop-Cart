import React from "react";

function BreadCrumbs() {
  return (
    <>
     <div className="bg-primary">
  <div className="container py-4">
    {/* Breadcrumb */}
    <nav className="d-flex">
      <h6 className="mb-0">
        <a href="" className="text-white-50">
          Home
        </a>
        <span className="text-white-50 mx-2"> &gt; </span>
        <a href="" className="text-white-50">
          Library
        </a>
        <span className="text-white-50 mx-2"> &gt; </span>
        <a href="" className="text-white">
          <u>Data</u>
        </a>
      </h6>
    </nav>
    {/* Breadcrumb */}
  </div>
</div>

    </>
  );
}

export default BreadCrumbs;
