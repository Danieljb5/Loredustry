const supernova = extendContent(Block, "supernova", {
    buildConfiguration(tile, table) {
        table.addImageButton(Icon.arrowUpSmall, Styles.clearTransi, run(() => tile.configure(0))).size(50);
    },
    configured(tile, value) {
        VREyeParameters.ui.hudfrag.showToast("Test.");
    }
})