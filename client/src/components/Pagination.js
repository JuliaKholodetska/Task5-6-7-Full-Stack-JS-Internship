import React from "react";
import { Link } from "react-router-dom";

export default function Pagination(props) {
	const { getFilterUrl, page, totalPages } = props;

	return (
		<div className="row-center-pagination">
			{totalPages === 1 ? (
				""
			) : page >= totalPages ? (
				<div className="pagination">
					<Link to={getFilterUrl({ searchPageNumber: page - 1 })}>
						Previous
					</Link>
				</div>
			) : (
				""
			)}
			<div className="pagination">
				{[...Array(totalPages).keys()].map((x) => (
					<Link
						className={x + 1 === page ? "active" : ""}
						key={x + 1}
						to={getFilterUrl({ searchPageNumber: x + 1 })}
					>
						{x + 1}
					</Link>
				))}
			</div>
			{totalPages >= page + 1 ? (
				<div className="pagination">
					<Link
						to={getFilterUrl({
							searchPageNumber: page + 1 > totalPages ? page : totalPages,
						})}
					>
						Next
					</Link>
				</div>
			) : (
				""
			)}
		</div>
	);
}
