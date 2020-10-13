export class ModeConstants {
    public static readonly NORMAL = 'n';
    public static readonly EXPANDED = 'e';
    private static readonly _modes: string[] = [ModeConstants.NORMAL, ModeConstants.EXPANDED];

    public static modes(): string[] {
        return this._modes;
    }
}
