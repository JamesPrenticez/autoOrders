Attribute VB_Name = "Module4"
Sub Format_Import_Cells_As_Strings()

Dim ws As Worksheet
Dim sheetArray As Variant


For Each ws In ActiveWorkbook.Worksheets

    If IsError(ws.Range("H9")) = False Then

    If ws.Range("H9") = "no" Then
        ws.Range("A6").NumberFormat = "@"
        ws.Range("F8").NumberFormat = "@"
        ws.Range("F9").NumberFormat = "@"
        ws.Range("F9").Formula = "'" & ws.Range("F9").Value
    End If
    If ws.Range("H9") = "yes" Then
        ws.Range("A6").NumberFormat = "@"
        ws.Range("F8").NumberFormat = "@"
        ws.Range("F9").NumberFormat = "@"
        ws.Range("F9").Formula = "'" & ws.Range("F9").Value
    End If
End If
Next ws
End Sub
��  ����          �   �                                                                                                 ?                                                                                                                                                                                                                                                                                                                                  @                                                  