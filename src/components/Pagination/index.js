import React from "react";

const Pagination = ({postsPerPage, totalPosts}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
                {pageNumbers.map(number => {
                    <button type="button" class="btn btn-primary">{number}</button>
                })}
                
                {/* <button type="button" class="btn btn-primary">2</button>
                <button type="button" class="btn btn-primary">3</button>
                <button type="button" class="btn btn-primary">4</button> */}
            </div>
        </div>
    )
}

export default Pagination;