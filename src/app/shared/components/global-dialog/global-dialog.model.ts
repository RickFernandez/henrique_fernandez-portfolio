export interface DialogData {
  title: string;
  content: string;
  hasCloseButton: boolean;
}

export interface DialogSizeConfig {
  width: string;
  height: string;
}

export interface DialogCloseConfig {
  isAutoClose: boolean;
  autoCloseDelay: number;
}