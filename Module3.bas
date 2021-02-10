Attribute VB_Name = "Module3"
Sub Save_Yes_As_PDF_And_Send_Email()

Dim xSht As Worksheet
Dim xFileDlg As FileDialog
Dim xFolder As String
Dim xYesorNo As Integer
Dim xOutlookObj As Object
Dim xEmailObj As Object
Dim xUsedRng As Range
Dim xPath As String
Set xSht = ActiveSheet
xPath = ThisWorkbook.Path 'Change Path
xFolder = xPath + "\" + xSht.Name + ".pdf"

Dim ws As Worksheet
Dim sheetArray As Variant

If Len(Dir(xFolder)) > 0 Then
        xYesorNo = MsgBox(xFolder & " already exists." & vbCrLf & vbCrLf & "Do you want to overwrite it?", _
            vbYesNo + vbQuestion, "File Exists")
        On Error Resume Next
        If xYesorNo = vbYes Then
            Kill xFolder
        Else
            MsgBox "if you don't overwrite the existing PDF, I can't continue." _
            & vbCrLf & vbCrLf & "Press OK to exit this macro.", vbCritical, "Exiting Macro"
        Exit Sub
    End If
    If Err.Number <> 0 Then
        MsgBox "Unable to delete existing file. Please make sure the file is not open or write protected." _
        & vbCrLf & vbCrLf & "Press OK to exit this macro.", vbCritical, "Unable to Delete File"
    Exit Sub
    End If
End If

'Loop through each ws and save if print value equal to "yes" then move to next
For Each ws In ActiveWorkbook.Worksheets
        If IsError(ws.Range("H9")) = False Then
        If ws.Range("H9") <> "yes" Then GoTo Line69
            If ws.Range("H9") = "yes" Then
                ws.ExportAsFixedFormat Type:=xlTypePDF, _
                    IgnorePrintAreas:=False, _
                    Filename:=ThisWorkbook.Path & "/" & ws.Range("F8") + " " + ws.Range("A6") + " " + ws.Range("F9") & ".pdf" 'ws.Name  between the & &
                    On Error Resume Next
    'Create Outlook email
                    Set xOutlookObj = CreateObject("Outlook.Application")
                    Set xEmailObj = xOutlookObj.CreateItem(0)
                        With xEmailObj
                            .Display
                            .To = ws.Range("B15")
                            .Subject = ws.Range("F8") + " " + ws.Range("A6") + " " + ws.Range("F9") 'ws.Name
                            .Attachments.Add ThisWorkbook.Path & "/" & ws.Range("F8") + " " + ws.Range("A6") + " " + ws.Range("F9") & ".pdf" 'ws.Name between the & &
                                If DisplayEmail = False Then
                                    '.Send
                                End If
                        End With
                    Else
                    MsgBox "The active worksheet cannot be blank"
            End If
        End If
Line69:
    Next ws
End Sub




                                                                                                                                                                                                                                                                                                          `     �X                      P�0���K�Π�                 %�P�0���K�Π�                 %��   �����                   ܟ�  '��E              E x                2 0 1 9   -   E               