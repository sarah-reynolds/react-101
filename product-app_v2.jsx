var products = [
  {category: "Sporting Goods", name: "Football", price: "$49.99", inStock: true},
  {category: "Sporting Goods", name: "Baseball", price: "$9.99", inStock: true},
  {category: "Sporting Goods", name: "Basketball", price: "$29.99", inStock: false},
  {category: "Electronics", name: "iPod Touch", price: "$99.99", inStock: true},
  {category: "Electronics", name: "iPhone 5", price: "$399.99", inStock: false},
  {category: "Electronics", name: "Nexus 7", price: "$199.99", inStock: true}
]

function SearchBar(props){
	return(
		<form className="search">
			<input placeholder="Search..." /><br />
			<label><input type="checkbox" />&nbsp;Only show products in stock</label>
		</form>
	)
}

function ProductTable(props){
	var rows = [];
	var lastCategory = "";
	var key = 0;
	products.forEach(function(product){

		if(product.category !== lastCategory){
			rows.push(<ProductCategoryRow key={key} category={product.category} />)
			lastCategory = product.category;
			key++;
		}
		rows.push(<ProductRow key={key} product={product} /> )
		key++;
	});

	return(
		<div className="product-table">
			<table className="table table-striped">
			<thead>	
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>

			<tbody>
				{rows}
			</tbody>
			
			</table>
		</div>
	)
}

function ProductCategoryRow(props){
	return(
			
			<tr>
				<td>{props.category}</td>
			</tr>
						
	)
}

function ProductRow(props){
	if(props.product.inStock === true){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	}
	return(
			<tr>
				<td className={productClass}>{props.product.name}</td>
				<td>{props.product.price}</td>
			</tr>
	)
}


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