/*
Sniperkit-Bot
- Status: analyzed
*/

const createNewTabList = ({tabs, title, time}) => ({
  tabs: tabs || [],
  title: title || '',
  time: time || Date.now(),
  titleEditing: false,
  pinned: false,
  expand: true,
})

export default {createNewTabList}
