var Products = [
  {category: "Sporting Goods", name: "Football", price: "$49.99"},
  {category: "Sporting Goods", name: "Baseball", price: "$9.99"},
  {category: "Sporting Goods", name: "Basketball", price: "$29.99"},
  {category: "Electronics", name: "iPod Touch", price: "$99.99"},
  {category: "Electronics", name: "iPhone 5", price: "$399.99"},
  {category: "Electronics", name: "Nexus 7", price: "$199.99"}
]

function SearchBar(props){
	return(
		<div className="search">
			<input placeholder="Search..." />
			<label><input type="checkbox" />Only show products in stock</label>
		</div>
	)
}

function ProductTable(props){
	return(
		<div className="product-table">
			<table>
			<thead>	
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			
			<ProductCategoryRow />
			<ProductRow />
			
			</table>
		</div>
	)
}

var ProductCategoryRow = React.createClass({
	render: () => {
		return(
			<tbody>
				<tr>
					<td>{Products[0].category}</td>
				</tr>
				<tr>
					<td>{Products[0].name}</td>
					<td>{Products[0].price}</td>
				</tr>
				<tr>
					<td>{Products[1].name}</td>
					<td>{Products[1].price}</td>
				</tr>
				<tr>
					<td>{Products[2].name}</td>
					<td>{Products[2].price}</td>
				</tr>
				<tr>
					<td>{Products[3].category}</td>
				</tr>
				<tr>
					<td>{Products[3].name}</td>
					<td>{Products[3].price}</td>
				</tr>
				<tr>
					<td>{Products[4].name}</td>
					<td>{Products[4].price}</td>
				</tr>
				<tr>
					<td>{Products[5].name}</td>
					<td>{Products[5].price}</td>
				</tr>
			</tbody>
		)
	}
})

var ProductRow = React.createClass({
	render: () => {
		return(
			<tr>
				<td></td>
			</tr>
		)
	}
})

function FilterableProductTable(props){
	return(
		<div className="app-wrapper">
		<SearchBar />
		<ProductTable />
		</div>
	)
}


ReactDOM.render(
	<FilterableProductTable />,
	document.getElementById('container')
)