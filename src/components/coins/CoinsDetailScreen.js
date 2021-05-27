import React, {Component} from 'react';
import { View, Image, Text, SectionList, StyleSheet } from 'react-native';
import Colors from '../../res/colors';
class CoinsDetailScreen extends Component{

    state = {
        coin: {}
    }

    getSymbolIcon = (name) => {

        if(name){
            const symbol = name.toLowerCase().replace(" ","-");
            return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
        }
    }

    getSections = (coin) => {
        const sections = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volumen 24",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            }
        ];
        return sections;
    }

    componentDidMount(){
        const { coin } = this.props.route.params;
        this.props.navigation.setOptions({title: coin.symbol})
        this.setState({ coin });
    }

    render() {
        
        const { coin } = this.state;

        return (
            <View style={style.container}>
                <View style={style.subHeader}>
                    <Image style={style.iconImg} source={{ uri: this.getSymbolIcon(coin.name) }}/>
                    <Text style={style.titleText}>{coin.name}</Text>
                </View>
                <SectionList
                    sections={this.getSections(coin)}
                    keyExtractor={(item)=> item}
                    renderItem={({ item }) => 
                        <View style={style.sectionItem}>
                            <Text style={style.itemText}>{item}</Text>
                        </View>
                    }
                    renderSectionHeader={({ section }) => 
                        <View style={style.sectionHeader}>
                            <Text style={style.sectionText}>{section.title}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },
    subHeader: {
        backgroundColor: "#2D2D2C",
        padding: 16,
        flexDirection: "row"
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 8
    },  
    iconImg: {
        width: 25,
        height: 25
    },
    sectionHeader: {
        backgroundColor: "#273746",
        padding: 8
    },
    sectionItem:{
        padding: 8
    },
    itemText: {
        color: "#fff",
        fontSize: 14
    },
    sectionText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default CoinsDetailScreen;