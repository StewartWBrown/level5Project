(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{530:function(e,t,n){"use strict";var r=n(6),a=n.n(r),s=n(207),o=n(835),i=n(12),c=n.n(i),u=n(16),l=n.n(u),d=n(822),j=n(833),p=n(245),h=n(1);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=n(181);function m(){return Object(f.a)()}var x=n(826),O=n(827),y=n(201),w=n(831),v=n(85),k=n(8),C=n(828),D=n(829),I=n(830),A=n(834),S=n(825),R={light:{text:"#000",background:"#fff",tint:"#008069",tabIconDefault:"#ccc",tabIconSelected:"#008069"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}},M=n(13),U=n(7),_=n(533),z=n(20),P=n.n(z),T=n(40),$=n(4),E=["style","lightColor","darkColor"],q=["style","lightColor","darkColor"];function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t){var n=m(),r=e[n];return r||R[n][t]}function B(e){var t=e.style,n=e.lightColor,r=e.darkColor,a=P()(e,E),s=F({light:n,dark:r},"text");return Object($.jsx)(T.a,N({style:[{color:s},t]},a))}function H(e){var t=e.style,n=e.lightColor,r=e.darkColor,a=P()(e,q),s=F({light:n,dark:r},"background");return Object($.jsx)(k.a,N({style:[{backgroundColor:s},t]},a))}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e){return Object($.jsx)(B,W(W({},e),{},{style:[e.style,{fontFamily:"space-mono"}]}))}function Y(e){var t=e.path;return Object($.jsxs)(H,{children:[Object($.jsxs)(H,{style:K.getStartedContainer,children:[Object($.jsx)(B,{style:K.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Open up the code for this screen:"}),Object($.jsx)(H,{style:[K.codeHighlightContainer,K.homeScreenFilename],darkColor:"rgba(255,255,255,0.05)",lightColor:"rgba(0,0,0,0.05)",children:Object($.jsx)(V,{children:t})}),Object($.jsx)(B,{style:K.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)",children:"Change any of the text, save the file, and your app will automatically update."})]}),Object($.jsx)(H,{style:K.helpContainer,children:Object($.jsx)(v.a,{onPress:J,style:K.helpLink,children:Object($.jsx)(B,{style:K.helpLinkText,lightColor:R.light.tint,children:"Tap here if your app doesn't automatically update after making changes"})})})]})}function J(){_.a("https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet")}var K=U.a.create({getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightContainer:{borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,lineHeight:24,textAlign:"center"},helpContainer:{marginTop:15,marginHorizontal:20,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{textAlign:"center"}});function Z(){return Object($.jsxs)(H,{style:Q.container,children:[Object($.jsx)(B,{style:Q.title,children:"Modal"}),Object($.jsx)(H,{style:Q.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),Object($.jsx)(Y,{path:"/screens/ModalScreen.tsx"}),Object($.jsx)(s.a,{style:"ios"===M.a.OS?"light":"auto"})]})}var Q=U.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function X(e){var t=e.navigation;return Object($.jsxs)(H,{style:ee.container,children:[Object($.jsx)(B,{style:ee.title,children:"This screen doesn't exist."}),Object($.jsx)(v.a,{onPress:function(){return t.replace("Root")},style:ee.link,children:Object($.jsx)(B,{style:ee.linkText,children:"Go to home screen!"})})]})}var ee=U.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}}),te={prefixes:[n(532).a("/")],config:{screens:{Root:{screens:{TabOne:{screens:{TabOneScreen:"one"}},TabTwo:{screens:{TabTwoScreen:"two"}}}},Modal:"modal",NotFound:"*"}}},ne=n(832),re=n(103),ae=n(5),se=n.n(ae),oe=n(69),ie=n(131),ce=n(97),ue=U.a.create({avatar:{width:58,height:58,marginRight:15,borderRadius:60},container:{flexDirection:"row",width:"100%",justifyContent:"space-between",padding:10},picContainer:{flexDirection:"row"},middleContainer:{justifyContent:"space-around"},dateContainer:{flexDirection:"row"},username:{fontWeight:"bold",fontSize:17},messagePreview:{fontSize:16,color:"grey",width:"100%"},timeRecieved:{fontSize:16,color:"grey"}}),le=function(e){var t=e.chatRoom,n=t.chatUsers.items[0].user,r=Object(ce.m)();return Object($.jsx)(ie.a,{onPress:function(){r.navigate("ChatRoom",{id:t.id,name:n.name})},children:Object($.jsxs)(k.a,{style:ue.container,children:[Object($.jsxs)(k.a,{style:ue.picContainer,children:[Object($.jsx)(oe.a,{source:{uri:n.imageUri},style:ue.avatar}),Object($.jsxs)(k.a,{style:ue.middleContainer,children:[Object($.jsxs)(T.a,{style:ue.username,children:[" ",n.name]}),Object($.jsx)(T.a,{numberOfLines:1,style:ue.messagePreview,children:t.lastMessage?t.lastMessage.content:""})]})]}),Object($.jsx)(k.a,{style:ue.dateContainer,children:Object($.jsx)(T.a,{style:ue.timeRecieved,children:t.lastMessage&&se()(t.lastMessage.timestamp).format("DD/MM/YYYY")})})]})})},de=n(823),je=U.a.create({container:{backgroundColor:R.light.tint,width:50,height:50,borderRadius:25,justifyContent:"center",alignItems:"center"}}),pe=function(){var e=Object(ce.m)();return Object($.jsx)(k.a,{style:je.container,children:Object($.jsx)(v.a,{onPress:function(){e.navigate("ListOfUsers")},children:Object($.jsx)(de.a,{name:"person-circle",size:28,color:"white"})})})},he=n(127),be=n(121),ge=n(459);function fe(){var e=Object(h.useState)([]),t=l()(e,2),n=t[0],r=t[1];return Object(h.useEffect)((function(){!function(){var e,t;a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.awrap(he.a.currentAuthenticatedUser());case 3:return e=n.sent,n.next=6,a.a.awrap(be.a.graphql(Object(ge.b)("\n  query GetUser($id: ID!) {\n    getUser(id: $id) {\n      id\n      name\n      imageUri\n      status\n      chatRooms {\n        items {\n          id\n          userID\n          chatRoomID\n          createdAt\n          updatedAt\n          chatRoom {\n            id\n                chatUsers {\n                    items {\n                        user {\n                            id\n                            name\n                            imageUri\n                            status\n                        }\n                    }\n                }\n                lastMessage{\n                  id\n                  content\n                  updatedAt\n                  user {\n                    id\n                    name\n                  }\n                }\n        }\n          \n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",{id:e.attributes.sub})));case 6:t=n.sent,r(t.data.getUser.chatRooms.items),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),null,null,[[0,10]],Promise)}()}),[]),Object($.jsxs)(H,{style:me.container,children:[Object($.jsx)(re.a,{style:{width:"100%"},data:n,renderItem:function(e){var t=e.item;return Object($.jsx)(le,{chatRoom:t.chatRoom})},keyExtractor:function(e){return e.id}}),Object($.jsx)(pe,{})]})}var me=U.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"}});var xe=Object(ne.a)();function Oe(){var e=m();return Object($.jsx)(xe.Navigator,{initialRouteName:"Chats",screenOptions:{tabBarActiveTintColor:R[e].background,tabBarStyle:{backgroundColor:"#1c3f89"},tabBarIndicatorStyle:{backgroundColor:R[e].background,height:5},tabBarLabelStyle:{fontWeight:"bold"},tabBarShowIcon:!0},children:Object($.jsx)(xe.Screen,{name:"Chats",component:fe,options:{title:"CHATS"}})})}var ye=n(28),we=n.n(ye),ve=U.a.create({container:{padding:10},messageBox:{padding:10,borderRadius:5},tinyFace:{width:100,height:100},name:{color:R.light.tint,fontWeight:"bold",marginBottom:5},message:{},timestamp:{alignSelf:"flex-end"}}),ke=function(e){var t=e.message,r=e.usersID,a=function(){return t.user.id===r};return Object($.jsxs)(k.a,{style:ve.container,children:["nothing"!=t.facialExpression?Object($.jsx)(oe.a,{style:ve.tinyFace,source:n(648)("./"+t.facialExpression+".png")}):null,Object($.jsxs)(k.a,{style:[ve.messageBox,{backgroundColor:t.colour,marginLeft:a()?120:0,marginRight:a()?0:50}],children:[!a()&&Object($.jsxs)(T.a,{style:ve.name,children:[" ",t.user.name," "]}),Object($.jsxs)(T.a,{style:{color:"#112ccf"==t.colour?"white":"black"},children:[" ",t.content," "]}),Object($.jsxs)(T.a,{style:ve.timestamp,children:[" ",se()(t.createdAt).fromNow()]})]})]})},Ce=n(188),De=U.a.create({container:{flexDirection:"row",alignItems:"center"},mainContainer:{flexDirection:"row",backgroundColor:"white",padding:10,borderRadius:40,flex:1,alignItems:"center"},buttonContainer:{backgroundColor:R.light.tint,borderRadius:50,width:40,height:40,justifyContent:"center",alignItems:"center",marginHorizontal:10},textInput:{flex:1,marginLeft:10,marginRight:5},icons:{marginHorizontal:4}}),Ie=n(71),Ae="\n  mutation CreateChatRoomUsers(\n    $input: CreateChatRoomUsersInput!\n    $condition: ModelChatRoomUsersConditionInput\n  ) {\n    createChatRoomUsers(input: $input, condition: $condition) {\n      id\n      userID\n      chatRoomID\n      user {\n        id\n        name\n        imageUri\n        status\n        chatRooms {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      chatRoom {\n        id\n        chatUsers {\n          nextToken\n        }\n        messages {\n          nextToken\n        }\n        lastMessageID\n        lastMessage {\n          id\n          content\n          createdAt\n          userID\n          colour\n          facialExpression\n          chatID\n          updatedAt\n        }\n        createdAt\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",Se=function(e){var t=e.chatRoomID,n=Object(h.useState)(""),r=l()(n,2),s=r[0],o=r[1],i=Object(h.useState)(null),c=l()(i,2),u=c[0],d=c[1],j="white",p="nothing";Object(h.useEffect)((function(){!function(){var e;a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(he.a.currentAuthenticatedUser());case 2:e=t.sent,d(e.attributes.sub);case 4:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]);var b=function(e){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.awrap(be.a.graphql(Object(ge.b)("\n  mutation UpdateChatRoom(\n    $input: UpdateChatRoomInput!\n    $condition: ModelChatRoomConditionInput\n  ) {\n    updateChatRoom(input: $input, condition: $condition) {\n      id\n      chatUsers {\n        items {\n          id\n          userID\n          chatRoomID\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      messages {\n        items {\n          id\n          content\n          createdAt\n          userID\n          colour\n          facialExpression\n          chatID\n          updatedAt\n        }\n        nextToken\n      }\n      lastMessageID\n      lastMessage {\n        id\n        content\n        createdAt\n        userID\n        colour\n        facialExpression\n        user {\n          id\n          name\n          imageUri\n          status\n          createdAt\n          updatedAt\n        }\n        chatID\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",{input:{id:t,lastMessageID:e}})));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),null,null,[[0,5]],Promise)},g=function(e){j=e,alert("Changed colour to "+e)},f=function(e){p=e,alert("Changed facial expression to "+e)};return Object($.jsxs)(k.a,{style:De.container,children:[Object($.jsxs)(k.a,{style:De.mainContainer,children:[Object($.jsxs)(Ie.Menu,{children:[Object($.jsx)(Ie.MenuTrigger,{text:"   ",triggerOnLongPress:!0}),Object($.jsxs)(Ie.MenuOptions,{children:[Object($.jsx)(Ie.MenuOption,{onSelect:function(){return f("happy")},text:"happy"}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return f("sad")},text:"sad"}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return f("fear")},text:"fear"}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return f("anger")},text:"anger"}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return f("surprise")},text:"surprise"}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return f("disgust")},text:"disgust"}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return g("#112ccf")},children:Object($.jsx)(T.a,{style:{color:"#112ccf"},children:"(1) Dark blue"})}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return g("#17dafc")},children:Object($.jsx)(T.a,{style:{color:"#17dafc"},children:"(2) Light Blue"})}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return g("#e06519")},children:Object($.jsx)(T.a,{style:{color:"#e06519"},children:"(3) Orange"})}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return g("#ed0707")},children:Object($.jsx)(T.a,{style:{color:"#ed0707"},children:"(4) Red"})}),Object($.jsx)(Ie.MenuOption,{onSelect:function(){return alert("Not called")},disabled:!0,text:"Disabled"})]})]}),Object($.jsx)(A.a,{name:"laugh-beam",size:25,color:"grey"}),Object($.jsx)(Ce.a,{style:De.textInput,placeholder:"Type a message...",multiline:!0,numberOfLines:2,value:s,onChangeText:o})]}),Object($.jsx)(v.a,{onPress:function(){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!=s){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,a.a.awrap(be.a.graphql(Object(ge.b)("\n  mutation CreateMessage(\n    $input: CreateMessageInput!\n    $condition: ModelMessageConditionInput\n  ) {\n    createMessage(input: $input, condition: $condition) {\n      id\n      content\n      createdAt\n      userID\n      colour\n      facialExpression\n      user {\n        id\n        name\n        imageUri\n        status\n        chatRooms {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      chatID\n      updatedAt\n    }\n  }\n",{input:{content:s,userID:u,chatID:t,colour:j,facialExpression:p}})));case 5:return e=n.sent,n.next=8,a.a.awrap(b(e.data.createMessage.id));case 8:o(""),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),null,null,[[0,11]],Promise)},children:Object($.jsx)(k.a,{style:De.buttonContainer,children:Object($.jsx)(S.a,{name:"send",size:24,color:"white"})})})]})},Re=function(){var e=Object(ce.o)(),t=Object(h.useState)([]),n=l()(t,2),r=n[0],s=n[1],o=Object(h.useState)([]),i=l()(o,2),c=i[0],u=i[1];return Object(h.useEffect)((function(){!function(){var t;a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(be.a.graphql(Object(ge.b)("\n  query MessagesByChatRoom(\n    $chatID: ID!\n    $createdAt: ModelStringKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelMessageFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    messagesByChatRoom(\n      chatID: $chatID\n      createdAt: $createdAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        content\n        createdAt\n        userID\n        colour\n        facialExpression\n        user {\n          id\n          name\n          imageUri\n          status\n          createdAt\n          updatedAt\n        }\n        chatID\n        updatedAt\n      }\n      nextToken\n    }\n  }\n",{chatID:e.params.id,sortDirection:"DESC"})));case 2:t=n.sent,s(t.data.messagesByChatRoom.items);case 4:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),Object(h.useEffect)((function(){!function(){var e;a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(he.a.currentAuthenticatedUser());case 2:e=t.sent,u(e.attributes.sub);case 4:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),Object(h.useEffect)((function(){var t=be.a.graphql(Object(ge.b)("\n  subscription OnCreateMessage {\n    onCreateMessage {\n      id\n      content\n      createdAt\n      userID\n      colour\n      facialExpression\n      user {\n        id\n        name\n        imageUri\n        status\n        chatRooms {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      chatID\n      updatedAt\n    }\n  }\n")).subscribe({next:function(t){var n=t.value.data.onCreateMessage;n.chatID===e.params.id&&s([n].concat(we()(r)))}});return function(){return t.unsubscribe()}}),[r]),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(re.a,{data:r,renderItem:function(e){var t=e.item;return Object($.jsx)(ke,{usersID:c,message:t})},inverted:!0}),Object($.jsx)(Se,{chatRoomID:e.params.id})]})},Me=U.a.create({avatar:{width:58,height:58,marginRight:15,borderRadius:60},container:{flexDirection:"row",width:"100%",justifyContent:"space-between",padding:10},picContainer:{flexDirection:"row"},middleContainer:{justifyContent:"space-around"},dateContainer:{flexDirection:"row"},username:{fontWeight:"bold",fontSize:17}}),Ue=function(e){var t=e.user,n=Object(ce.m)();return Object($.jsx)(ie.a,{onPress:function(){var e,r,s;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,a.a.awrap(be.a.graphql(Object(ge.b)("\n  mutation CreateChatRoom(\n    $input: CreateChatRoomInput!\n    $condition: ModelChatRoomConditionInput\n  ) {\n    createChatRoom(input: $input, condition: $condition) {\n      id\n      chatUsers {\n        items {\n          id\n          userID\n          chatRoomID\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      messages {\n        items {\n          id\n          content\n          createdAt\n          userID\n          colour\n          facialExpression\n          chatID\n          updatedAt\n        }\n        nextToken\n      }\n      lastMessageID\n      lastMessage {\n        id\n        content\n        createdAt\n        userID\n        colour\n        facialExpression\n        user {\n          id\n          name\n          imageUri\n          status\n          createdAt\n          updatedAt\n        }\n        chatID\n        updatedAt\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",{input:{}})));case 3:if((e=o.sent).data){o.next=7;break}return console.log("Error creating chat room"),o.abrupt("return");case 7:return r=e.data.createChatRoom,o.next=10,a.a.awrap(be.a.graphql(Object(ge.b)(Ae,{input:{userID:t.id,chatRoomID:r.id}})));case 10:return o.next=12,a.a.awrap(he.a.currentAuthenticatedUser());case 12:return s=o.sent,o.next=15,a.a.awrap(be.a.graphql(Object(ge.b)(Ae,{input:{userID:s.attributes.sub,chatRoomID:r.id}})));case 15:n.navigate("ChatRoom",{id:r.id,name:"Visitor"}),o.next=21;break;case 18:o.prev=18,o.t0=o.catch(0),console.log(o.t0);case 21:case"end":return o.stop()}}),null,null,[[0,18]],Promise)},children:Object($.jsxs)(k.a,{style:Me.picContainer,children:[Object($.jsx)(oe.a,{source:{uri:t.imageUri},style:Me.avatar}),Object($.jsx)(k.a,{style:Me.middleContainer,children:Object($.jsxs)(T.a,{style:Me.username,children:[" ",t.name]})})]})})};function _e(){var e=Object(h.useState)([]),t=l()(e,2),n=t[0],r=t[1];return Object(h.useEffect)((function(){!function(){var e;a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(be.a.graphql(Object(ge.b)("\n  query ListUsers(\n    $filter: ModelUserFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        name\n        imageUri\n        status\n        chatRooms {\n          nextToken\n        }\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n")));case 3:e=t.sent,r(e.data.listUsers.items),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]],Promise)}()}),[]),Object($.jsx)(k.a,{style:ue.container,children:Object($.jsx)(re.a,{style:{width:"100%"},data:n,renderItem:function(e){var t=e.item;return Object($.jsx)(Ue,{user:t})},keyExtractor:function(e){return e.id}})})}function ze(e){var t=e.colorScheme;return Object($.jsx)(x.a,{linking:te,theme:"dark"===t?O.a:y.a,children:Object($.jsx)(Te,{})})}var Pe=Object(w.a)();function Te(){var e=function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(he.a.currentAuthenticatedUser());case 2:e=t.sent,he.a.signOut(e);case 4:case"end":return t.stop()}}),null,null,null,Promise)};return Object($.jsxs)(Pe.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#1c3f89"},headerShadowVisible:!1,headerTintColor:R.light.background,headerTitleStyle:{fontWeight:"bold"}},children:[Object($.jsx)(Pe.Screen,{name:"Root",component:Oe,options:{headerShown:!0,title:"Glasgow Students' Nightline",headerRight:function(){return Object($.jsxs)(k.a,{style:{flexDirection:"row",width:69,justifyContent:"space-between",marginRight:6},children:[Object($.jsx)(C.a,{name:"search1",size:20,color:"white"}),Object($.jsx)(v.a,{onPress:e,children:Object($.jsx)(D.a,{name:"log-out",size:20,color:"white"})})]})}}}),Object($.jsx)(Pe.Screen,{name:"ChatRoom",component:Re,options:function(e){e.route;return{title:"Visitor",headerRight:function(){return Object($.jsxs)(k.a,{style:{flexDirection:"row",width:100,justifyContent:"space-between",marginRight:10},children:[Object($.jsx)(I.a,{name:"call",size:22,color:"white"}),Object($.jsx)(A.a,{name:"video",size:22,color:"white"}),Object($.jsx)(S.a,{name:"dots-vertical",size:22,color:"white"})]})}}}}),Object($.jsx)(Pe.Screen,{name:"ListOfUsers",component:_e}),Object($.jsx)(Pe.Screen,{name:"NotFound",component:X,options:{title:"Oops!"}}),Object($.jsx)(Pe.Group,{screenOptions:{presentation:"modal"},children:Object($.jsx)(Pe.Screen,{name:"Modal",component:Z})})]})}var $e={aws_project_region:"eu-west-2",aws_cognito_identity_pool_id:"eu-west-2:0967090a-7c8e-4392-87bb-9bc8b1a81adc",aws_cognito_region:"eu-west-2",aws_user_pools_id:"eu-west-2_t25x0zxUR",aws_user_pools_web_client_id:"15dgp5mrkvrqolnprth6jcbcu9",oauth:{},aws_cognito_username_attributes:[],aws_cognito_social_providers:[],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"],aws_appsync_graphqlEndpoint:"https://mm37p7jmuvajzeui7omobbymeu.appsync-api.eu-west-2.amazonaws.com/graphql",aws_appsync_region:"eu-west-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_appsync_apiKey:"da2-rnus4oem7vggtjf3nowjxko73y"},Ee=n(518);n(38).default.configure($e);t.a=Object(Ee.withAuthenticator)((function(){var e=function(){var e=Object(h.useState)(!1),t=l()(e,2),r=t[0],s=t[1];return Object(h.useEffect)((function(){a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p.b(),e.next=4,a.a.awrap(j.b(g(g({},d.a.font),{},{"space-mono":n(559)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,s(!0),p.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}(),t=m();return Object(h.useEffect)((function(){!function(){var e,t;a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(he.a.currentAuthenticatedUser({bypassCache:!0}));case 2:if(!(e=n.sent)){n.next=13;break}return n.next=6,a.a.awrap(be.a.graphql(Object(ge.b)("\n  query GetUser($id: ID!) {\n    getUser(id: $id) {\n      id\n      name\n      imageUri\n      status\n      chatRooms {\n        items {\n          id\n          userID\n          chatRoomID\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",{id:e.attributes.sub})));case 6:if(!n.sent.data.getUser){n.next=10;break}return console.log("User previously registered"),n.abrupt("return");case 10:return t={id:e.attributes.sub,name:e.username,imageUri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaD2U5l8Wq1og0jp9G4hau7DAUCfb9RzkyA&usqp=CAU",status:"Caller waiting in queue"},n.next=13,a.a.awrap(be.a.graphql(Object(ge.b)("\n  mutation CreateUser(\n    $input: CreateUserInput!\n    $condition: ModelUserConditionInput\n  ) {\n    createUser(input: $input, condition: $condition) {\n      id\n      name\n      imageUri\n      status\n      chatRooms {\n        items {\n          id\n          userID\n          chatRoomID\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",{input:t})));case 13:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),e?Object($.jsx)(Ie.MenuProvider,{children:Object($.jsxs)(o.b,{children:[Object($.jsx)(ze,{colorScheme:t}),Object($.jsx)(s.a,{})]})}):null}))},543:function(e,t,n){e.exports=n(791)},559:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},579:function(e,t){},585:function(e,t,n){var r={"./af":263,"./af.js":263,"./ar":264,"./ar-dz":265,"./ar-dz.js":265,"./ar-kw":266,"./ar-kw.js":266,"./ar-ly":267,"./ar-ly.js":267,"./ar-ma":268,"./ar-ma.js":268,"./ar-sa":269,"./ar-sa.js":269,"./ar-tn":270,"./ar-tn.js":270,"./ar.js":264,"./az":271,"./az.js":271,"./be":272,"./be.js":272,"./bg":273,"./bg.js":273,"./bm":274,"./bm.js":274,"./bn":275,"./bn-bd":276,"./bn-bd.js":276,"./bn.js":275,"./bo":277,"./bo.js":277,"./br":278,"./br.js":278,"./bs":279,"./bs.js":279,"./ca":280,"./ca.js":280,"./cs":281,"./cs.js":281,"./cv":282,"./cv.js":282,"./cy":283,"./cy.js":283,"./da":284,"./da.js":284,"./de":285,"./de-at":286,"./de-at.js":286,"./de-ch":287,"./de-ch.js":287,"./de.js":285,"./dv":288,"./dv.js":288,"./el":289,"./el.js":289,"./en-au":290,"./en-au.js":290,"./en-ca":291,"./en-ca.js":291,"./en-gb":292,"./en-gb.js":292,"./en-ie":293,"./en-ie.js":293,"./en-il":294,"./en-il.js":294,"./en-in":295,"./en-in.js":295,"./en-nz":296,"./en-nz.js":296,"./en-sg":297,"./en-sg.js":297,"./eo":298,"./eo.js":298,"./es":299,"./es-do":300,"./es-do.js":300,"./es-mx":301,"./es-mx.js":301,"./es-us":302,"./es-us.js":302,"./es.js":299,"./et":303,"./et.js":303,"./eu":304,"./eu.js":304,"./fa":305,"./fa.js":305,"./fi":306,"./fi.js":306,"./fil":307,"./fil.js":307,"./fo":308,"./fo.js":308,"./fr":309,"./fr-ca":310,"./fr-ca.js":310,"./fr-ch":311,"./fr-ch.js":311,"./fr.js":309,"./fy":312,"./fy.js":312,"./ga":313,"./ga.js":313,"./gd":314,"./gd.js":314,"./gl":315,"./gl.js":315,"./gom-deva":316,"./gom-deva.js":316,"./gom-latn":317,"./gom-latn.js":317,"./gu":318,"./gu.js":318,"./he":319,"./he.js":319,"./hi":320,"./hi.js":320,"./hr":321,"./hr.js":321,"./hu":322,"./hu.js":322,"./hy-am":323,"./hy-am.js":323,"./id":324,"./id.js":324,"./is":325,"./is.js":325,"./it":326,"./it-ch":327,"./it-ch.js":327,"./it.js":326,"./ja":328,"./ja.js":328,"./jv":329,"./jv.js":329,"./ka":330,"./ka.js":330,"./kk":331,"./kk.js":331,"./km":332,"./km.js":332,"./kn":333,"./kn.js":333,"./ko":334,"./ko.js":334,"./ku":335,"./ku.js":335,"./ky":336,"./ky.js":336,"./lb":337,"./lb.js":337,"./lo":338,"./lo.js":338,"./lt":339,"./lt.js":339,"./lv":340,"./lv.js":340,"./me":341,"./me.js":341,"./mi":342,"./mi.js":342,"./mk":343,"./mk.js":343,"./ml":344,"./ml.js":344,"./mn":345,"./mn.js":345,"./mr":346,"./mr.js":346,"./ms":347,"./ms-my":348,"./ms-my.js":348,"./ms.js":347,"./mt":349,"./mt.js":349,"./my":350,"./my.js":350,"./nb":351,"./nb.js":351,"./ne":352,"./ne.js":352,"./nl":353,"./nl-be":354,"./nl-be.js":354,"./nl.js":353,"./nn":355,"./nn.js":355,"./oc-lnc":356,"./oc-lnc.js":356,"./pa-in":357,"./pa-in.js":357,"./pl":358,"./pl.js":358,"./pt":359,"./pt-br":360,"./pt-br.js":360,"./pt.js":359,"./ro":361,"./ro.js":361,"./ru":362,"./ru.js":362,"./sd":363,"./sd.js":363,"./se":364,"./se.js":364,"./si":365,"./si.js":365,"./sk":366,"./sk.js":366,"./sl":367,"./sl.js":367,"./sq":368,"./sq.js":368,"./sr":369,"./sr-cyrl":370,"./sr-cyrl.js":370,"./sr.js":369,"./ss":371,"./ss.js":371,"./sv":372,"./sv.js":372,"./sw":373,"./sw.js":373,"./ta":374,"./ta.js":374,"./te":375,"./te.js":375,"./tet":376,"./tet.js":376,"./tg":377,"./tg.js":377,"./th":378,"./th.js":378,"./tk":379,"./tk.js":379,"./tl-ph":380,"./tl-ph.js":380,"./tlh":381,"./tlh.js":381,"./tr":382,"./tr.js":382,"./tzl":383,"./tzl.js":383,"./tzm":384,"./tzm-latn":385,"./tzm-latn.js":385,"./tzm.js":384,"./ug-cn":386,"./ug-cn.js":386,"./uk":387,"./uk.js":387,"./ur":388,"./ur.js":388,"./uz":389,"./uz-latn":390,"./uz-latn.js":390,"./uz.js":389,"./vi":391,"./vi.js":391,"./x-pseudo":392,"./x-pseudo.js":392,"./yo":393,"./yo.js":393,"./zh-cn":394,"./zh-cn.js":394,"./zh-hk":395,"./zh-hk.js":395,"./zh-mo":396,"./zh-mo.js":396,"./zh-tw":397,"./zh-tw.js":397};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=585},594:function(e,t){},648:function(e,t,n){var r={"./adaptive-icon.png":649,"./anger.png":650,"./disgust.png":651,"./favicon.png":652,"./fear.png":653,"./happy.png":654,"./icon.png":655,"./nothing.png":656,"./sad.png":657,"./splash.png":658,"./surprise.png":659};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=648},649:function(e,t,n){e.exports=n.p+"static/media/adaptive-icon.e4e80208.png"},650:function(e,t,n){e.exports=n.p+"static/media/anger.5166532b.png"},651:function(e,t,n){e.exports=n.p+"static/media/disgust.db8ab1c6.png"},652:function(e,t,n){e.exports=n.p+"static/media/favicon.fa4783d1.png"},653:function(e,t,n){e.exports=n.p+"static/media/fear.5ca7021a.png"},654:function(e,t,n){e.exports=n.p+"static/media/happy.4f35b627.png"},655:function(e,t,n){e.exports=n.p+"static/media/icon.608e4d9d.png"},656:function(e,t,n){e.exports=n.p+"static/media/nothing.d4bd45e5.png"},657:function(e,t,n){e.exports=n.p+"static/media/sad.0888cc08.png"},658:function(e,t,n){e.exports=n.p+"static/media/splash.59202d46.png"},659:function(e,t,n){e.exports=n.p+"static/media/surprise.9b053562.png"}},[[543,1,2]]]);
//# sourceMappingURL=app.1fe93831.chunk.js.map