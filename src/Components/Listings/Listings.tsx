import React, { useEffect} from "react";
import { observer } from "mobx-react-lite"
import { useListingsStore } from "../../Context/ListingsContext";
import "./Listings.css";
import Listing from "./Listing";
import ListingsFilterSort from "./FilterSort/FilterSort";
import Pagination from "./Pagination/Pagination";
import LoadingCircle from "../Common/Loading/LoadingCircle";



const Listings: React.FC = observer(() => {

    const {page, maxPages, listings, getListings, isLoading, clearListings} = useListingsStore();

    useEffect(() => {
        getListings();

        return () => {
            clearListings();
        }
    }, [getListings, clearListings]);

    return (
        <div className="listings-screen">
            <div className="listing-title">
                <h2 className="lobster-text">All Listings</h2>
                {maxPages > 0 && <ListingsFilterSort />}
            </div>
            {isLoading && 
            <div className="loading-container">
                <LoadingCircle/>
            </div>}
            {!isLoading && <div className="listings-container">
                {listings.map(listing => {
                    return <Listing key={listing.id} listing={listing} />
                })}
            </div>}
            {!isLoading && <div className="pagination-box">
                {maxPages > 0 && <h5 className="page-info">Page {page} of {maxPages}</h5>}
                <Pagination />
            </div>}
        </div>
    )
})

export default Listings;