function initAPP() {
    $('#langContainer').dxSelectBox({
        dataSource: locCode,
        value: locale,
        onValueChanged: function (e) {
            // save the current to a local storage
            db.load().done(function (data) {
                if (data.length)
                    db.update(data[0].lang, { value: e.value });
                else
                    db.insert({ value: e.value });
            });
            // refresh a page to set a new locale
            window.location.reload()
        }
    });

    $('#btnContainer').dxButton({
        text: Globalize.formatMessage("btnText"),
        onClick: function () {
            DevExpress.ui.dialog.alert(Globalize.formatMessage("alertMessage"), Globalize.formatMessage("alertTitle"));
        }
    });

    $('#dateContainer').dxDateBox({
        value: new Date()
    });

    $('#gridContainer').dxDataGrid({
        dataSource: generateData(5),
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        }
    });
}