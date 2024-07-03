import style from "./style.module.css";

export default function Stats() {
	const { statistics } = useStadistics();
	
	return (
		<>
			<div className={style.container}>
				<div className={style.card}>
					<h3 className={style.h3}>Productos</h3>
					<h4 className={style.h4}>vendidos en el mes</h4>
					<p>{statistics?.monthQuantity}</p>
				</div>
				<div className={style.card}>
					<h3 className={style.h3}>Productos</h3>
					<h4 className={style.h4}>vendidos en el año</h4>
					<p>{statistics?.yearQuantity}</p>
				</div>
				<div className={style.card}>
					<h3 className={style.h3}>Producto</h3>
					<h4 className={style.h4}>mas vendido en el mes</h4>
					<p>{statistics?.mostSelledOnMonth || "😭"}</p>
				</div>
				<div className={style.card}>
					<h3 className={style.h3}>Producto</h3>
					<h4 className={style.h4}>mas vendido en el año</h4>
					<p>{statistics?.mostSelledOnYear || "😿"}</p>
				</div>
			</div>
			<div className={style.topContainer}>
				<div className={style.top}>
					Top del mes
					{statistics?.yearTop?.length ? (
						<ul>
							{statistics?.yearTop?.map((product) => {
								return (
									<li key={product.code}>
										<p>
											{product.code}: {product.quantity}
										</p>
									</li>
								);
							})}
						</ul>
					) : (
						<p>{"No hay top😿"}</p>
					)}
				</div>
				<div className={style.top}>
					Top del año
					{statistics?.yearTop?.length ? (
						<ul>
							{statistics?.yearTop?.map((product) => {
								return (
									<li key={product.code}>
										<p>
											{product.code}: {product.quantity}
										</p>
									</li>
								);
							})}
						</ul>
					) : (
						<p>{"No hay top😿"}</p>
					)}
				</div>
			</div>
		</>
	);
}