Attribute VB_Name = "Module5"
Sub Set_All_Print_Values_To_Yes()

Dim ws As Worksheet
Dim sheetArray As Variant

For Each ws In ActiveWorkbook.Worksheets
    If IsError(ws.Range("H9")) = False Then
    If ws.Range("H9") = "no" Then
        ws.Range("H9") = "yes"
    End If
End If
Next ws
End Sub

\}ķ          \zķ          \{ķ          \xķ          \yķ          \vķ  þ   (   \wķ          \tķ          \uķ          \rķ          \sķ          \pķ                  