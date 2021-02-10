Attribute VB_Name = "Module2"
Sub Save_Yes_As_PDF()

Dim ws As Worksheet
Dim sheetArray As Variant

'Loop through each worksheet
For Each ws In ActiveWorkbook.Worksheets
    'Check to make sure there is not an error in the cell
    If IsError(ws.Range("H9")) = False Then
    'Check H9 cell has value equal to "yes"
    If ws.Range("H9") = "yes" Then
       'Print options
        ws.ExportAsFixedFormat Type:=xlTypePDF, _
            IgnorePrintAreas:=False, _
            Filename:=ThisWorkbook.Path & "/" & ws.Name & ".pdf"
    End If
End If
Next ws
End Sub



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                