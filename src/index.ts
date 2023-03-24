import type { TypedUseSelectorHook } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createAction } from './lib/createAction';

/** 导出类型定义 */
export type { TypedUseSelectorHook, PayloadAction };
/** 导出 Provider */
export { Provider };
/** 导出 hook */
export { useSelector, useDispatch };
/** 导出创建 store 的方法 */
export { configureStore };
/** 导出创建 action 和 reducer 的方法 */
export { createSlice };
/** 新增工具 */
export { createAction };

