import React, { useEffect} from "react";
import Listing from "./Listing";
import "./Listings.css";
import { observer } from "mobx-react-lite"

import Pagination from "./Pagination/Pagination";
import { useListingsStore } from "../../Context/ListingsContext";
import ListingsFilterSort from "./FilterSort/FilterSort";

const Listings: React.FC = observer(() => {

    const {page, maxPages, filter: {engine, make}, sorting:{sortBy, order}, currentPageList, paginate, getCurrentList} = useListingsStore();

    useEffect(() => {
        if (page === 1) {
            getCurrentList();
            paginate();
            return;
        }
        getCurrentList()
    }, [engine, make, sortBy, order]);

    useEffect(() => {
        paginate();
    }, [page]);

    return (
        <div className="listings">
            <div className="listing-title">
                <h2 className="lobster-text">All Listings</h2>
                <h5 className="page-info">Page {page} of {maxPages}</h5>
                <ListingsFilterSort />
            </div>
            <div className="listings-container">
                {currentPageList.map(listing => {
                    return <Listing key={listing.id} listing={listing} />
                })}
            </div>
            <div className="pagination-box">
                <h5 className="page-info">Page {page} of {maxPages}</h5>
                <Pagination />
            </div>
        </div>
    )
})

export default Listings;