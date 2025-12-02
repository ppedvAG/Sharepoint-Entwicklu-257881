import {
  ButtonClickedCallback,
  ICountryListItem
} from '../../../Modelle';

export interface ISpFxHttpClientDemoProps {
  spListItems: ICountryListItem[];
  onGetListItems?: ButtonClickedCallback;
  onAddListItem?:ButtonClickedCallback;
  onUpdateListItem?:ButtonClickedCallback;
  onDeleteListItem?:ButtonClickedCallback;
  
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
