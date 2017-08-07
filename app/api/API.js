const prefix = (path) => `http://v3.wufazhuce.com:8000/api/${path}`;


export const GET_DATA_ARRAY = prefix(`onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
export const GET_DAY_LIST = (id) => prefix(`onelist/${id}/0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`); 
export const GET_READ_LIST = prefix(`channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
export const GET_MUSIC_LIST = prefix(`channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
export const GET_MOVIE_LIST = prefix(`channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
