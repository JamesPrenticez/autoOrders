Attribute VB_Name = "Module1"
Sub Save_All_As_PDF()

'Create variables
Dim ws As Worksheet

'Loop through all worksheets and save as individual PDF in same folder
'as the Excel file
For Each ws In ActiveWorkbook.Worksheets

    ws.ExportAsFixedFormat Type:=xlTypePDF, _
        Filename:=ThisWorkbook.Path & "/" & ws.Name & ".pdf"

Next

End Sub

  ��Q��  �,�5  ��Q��  �,�5� ��Q��  �,�5� ��Q��  �,�5  ��Q��  �,�5  ��Q��  �,�5  ��Q��  �,�5� ��Q��  �,�5� ��Q��          