import React, { useState, useEffect, Div } from 'react';
import { View, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


const App = () => {
	
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View>
					<p>test</p>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
