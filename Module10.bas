Attribute VB_Name = "Module10"
Sub Go_To_Sheet()
Attribute Go_To_Sheet.VB_ProcData.VB_Invoke_Func = "w\n14"
Dim i As Variant
Dim ws As Worksheet
i = Application.InputBox("Enter worksheet name", "Select sheet")

'Cancel was pressed
If i = False Or Trim(i) = "" Then Exit Sub

'Check if sheet exist
On Error Resume Next
Set ws = Sheets(i)
On Error GoTo 0

If ws Is Nothing Then
MsgBox "Worksheet " & i & " not found!"
Else
Sheets(i).Select
End If
End Sub
�5� ��Q��  "��5  ��Q��          